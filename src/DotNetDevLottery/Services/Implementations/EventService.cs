using DotNetDevLottery.Models;
using Microsoft.AspNetCore.Components.Forms;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System.Text.RegularExpressions;

namespace DotNetDevLottery.Services.Implementations;

public class EventService : IEventService
{
    public List<EventInfo> EventInfos { get; } = new()
    {
        new()
        {
            name = "ONOFFMIX",
            firstRowCellString = "번호",
            nameCellString = "이름",
            phoneCellString = "전화",
            emailCellString = "이메일",
            ticketCellString = "그룹",
            checkedCellString = "출석확인일시",
            isOldExcel = true,
        },
        new()
        {
            name = "EVENTUS",
            firstRowCellString = "순서",
            nameCellString = "이름",
            phoneCellString = "전화번호",
            emailCellString = "이메일",
            beforeStartTicketString = "오프라인 전체 출석",
            checkedCellString = "출석",
            checkedString = "O",
            isOldExcel = false,
            isEnumTicketCell = false,
        },
        new()
        {
            name = "FESTA",
            firstRowCellString = "이름",
            nameCellString = "이름",
            phoneCellString = "휴대폰",
            emailCellString = "이메일",
            ticketCellString = "티켓",
            checkedCellString = "체크인",
            checkedString = "Yes",
            isOldExcel = false,
        },
    };

    public List<UserInfo> UserInfos { get; private set; } = new List<UserInfo>();

    public void SetUserInfoList(IEnumerable<UserInfo> userInfoList)
        => UserInfos = userInfoList.ToList();

    public void ClearUserInfoList()
        => UserInfos.Clear();

    private string MaskName(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            return name;

        var trimmedName = name.Trim();
        if (trimmedName.Length > 2)
            return Regex.Replace(trimmedName, "(?<=.)(.*)(?=.)", m => new string('*', m.Length));
        else
            return trimmedName[0] + new string('*', trimmedName.Length - 1);
    }

    private string MaskPhone(string phone)
    {
        if (string.IsNullOrWhiteSpace(phone))
            return phone;

        var numericOnly = Regex.Replace(phone, "[^0-9]", string.Empty);

        if (numericOnly.Length <= 4)
            return numericOnly.Length == 0 ? phone : numericOnly;
        else
            return numericOnly.Substring(numericOnly.Length - 4);
    }

    private string MaskEmail(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
            return email;

        var trimmedEmail = email.Trim();
        var atIndex = trimmedEmail.IndexOf('@');

        if (atIndex < 0)
            return email;
        else
            return trimmedEmail.Substring(0, atIndex) + "***";
    }

    public async Task LoadUserInfoListAsync(int eventInfoIndex, IBrowserFile file, CancellationToken cancellationToken = default)
    {
        var eventInfo = EventInfos[eventInfoIndex];
        UserInfos.Clear();

        var ms = new MemoryStream();

        using (var httpStream = file.OpenReadStream())
        {
            await httpStream.CopyToAsync(ms, cancellationToken).ConfigureAwait(false);
        }

        ms.Seek(0L, SeekOrigin.Begin);

        int nameIndex = 0;
        int phoneIndex = 0;
        int emailIndex = 0;
        int ticketIndex = 0;
        int isCheckedIndex = 0;
        int beforeStartTicketIndex = 0;
        bool isUserInfoStarted = false;
        IRow? firstRow = null;
        ISheet sheet;

        if (eventInfo.isOldExcel)
        {
            var hsswb = new HSSFWorkbook(ms);
            sheet = hsswb.GetSheetAt(0);
        }
        else
        {
            var xsswb = new XSSFWorkbook(ms);
            sheet = xsswb.GetSheetAt(0);
        }
        for (var index = sheet.FirstRowNum; index <= sheet.LastRowNum; index++)
        {
            var currentRow = sheet.GetRow(index);

            if (currentRow == null)
            {
                if (isUserInfoStarted)
                    return;
                
                continue;
            }

            var firstCellString = currentRow.GetCell(0)?.ToString() ?? string.Empty;

            if (firstCellString == eventInfo.firstRowCellString)
            {
                firstRow = currentRow;
                isUserInfoStarted = true;

                for (var cellIndex = firstRow.FirstCellNum; cellIndex < firstRow.LastCellNum; cellIndex++)
                {
                    var currentCellString = firstRow.GetCell(cellIndex).ToString();

                    if (currentCellString == eventInfo.nameCellString)
                        nameIndex = cellIndex;
                    else if (currentCellString == eventInfo.phoneCellString)
                        phoneIndex = cellIndex;
                    else if (currentCellString == eventInfo.emailCellString)
                        emailIndex = cellIndex;
                    else if (currentCellString == eventInfo.ticketCellString)
                        ticketIndex = cellIndex;
                    else if (currentCellString == eventInfo.checkedCellString)
                        isCheckedIndex = cellIndex;
                    else if (currentCellString == eventInfo.beforeStartTicketString)
                        beforeStartTicketIndex = cellIndex;
                }
                continue;
            }

            if (isUserInfoStarted == false)
                continue;

            var ticketType = string.Empty;
            var isChecked = false;
            if (eventInfo.isEnumTicketCell)
            {
                var checkedString = (eventInfo.checkedString ?? string.Empty);
                // onoffmix가 출석확인시간으로 엑셀에 저장하는 이슈로 checkedString이 없는 경우 해당 열이 empty인지만 체크
                isChecked = (eventInfo.checkedString == string.Empty)
                    ? (currentRow.GetCell(isCheckedIndex)?.ToString() ?? string.Empty).Contains(checkedString)
                    : (currentRow.GetCell(isCheckedIndex)?.ToString() ?? string.Empty) == string.Empty;

                ticketType = currentRow.GetCell(ticketIndex)?.ToString() ?? string.Empty;
            }
            else
            {
                if (firstRow == null)
                {
                    continue;
                }
                for (var cellIndex = beforeStartTicketIndex + 1; cellIndex < firstRow.LastCellNum; cellIndex += 3)
                {
                    if (currentRow.GetCell(cellIndex).ToString() != "O") continue;
                    
                    ticketType = firstRow.GetCell(cellIndex).ToString();
                    if (firstRow.GetCell(cellIndex + 2).ToString() == eventInfo.checkedCellString)
                    {
                        isChecked = (currentRow.GetCell(cellIndex + 2).ToString() == eventInfo.checkedString);
                    }
                    break;
                }
            }

            UserInfos.Add(new()
            {
                personName = MaskName(currentRow.GetCell(nameIndex).ToString() ?? string.Empty),
                email = MaskEmail(currentRow.GetCell(emailIndex).ToString() ?? string.Empty),
                phone = MaskPhone(currentRow.GetCell(phoneIndex).ToString() ?? string.Empty),
                ticketType = ticketType,
                isChecked = isChecked
            });
        }
    }
}