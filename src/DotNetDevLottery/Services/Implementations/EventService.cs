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
            emailCellString = "이메일",
            ticketCellString = "그룹",
            checkedCellString = "참여확정",
            checkedString = "Y",
            isOldExcel = true,
        },
        new()
        {
            name = "FESTA",
            firstRowCellString = "이름",
            nameCellString = "이름",
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
        int emailIndex = 0;
        int ticketIndex = 0;
        int isCheckedIndex = 0;
        bool isUserInfoStarted = false;
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

        for (var index = sheet.FirstRowNum; index < sheet.LastRowNum; index++)
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
                isUserInfoStarted = true;

                for (var cellIndex = currentRow.FirstCellNum; cellIndex < currentRow.LastCellNum; cellIndex++)
                {
                    var currentCellString = currentRow.GetCell(cellIndex).ToString();

                    if (currentCellString == eventInfo.nameCellString)
                        nameIndex = cellIndex;
                    else if (currentCellString == eventInfo.emailCellString)
                        emailIndex = cellIndex;
                    else if (currentCellString == eventInfo.ticketCellString)
                        ticketIndex = cellIndex;
                    else if (currentCellString == eventInfo.checkedCellString)
                        isCheckedIndex = cellIndex;
                }
                continue;
            }

            if (isUserInfoStarted == false)
                continue;

            UserInfos.Add(new()
            {
                personName = MaskName(currentRow.GetCell(nameIndex).ToString() ?? string.Empty),
                email = MaskEmail(currentRow.GetCell(emailIndex).ToString() ?? string.Empty),
                ticketType = currentRow.GetCell(ticketIndex)?.ToString() ?? string.Empty,
                isChecked = (currentRow.GetCell(isCheckedIndex)?.ToString() ?? string.Empty)
                    .Contains(eventInfo.checkedString)
            });
        }
    }
}