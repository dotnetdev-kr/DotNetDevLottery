using BlazorApp1.Models;
using Microsoft.AspNetCore.Components.Forms;
using NPOI.HSSF.UserModel;
using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;

namespace BlazorApp1.Services;

public interface IEventService
{
    public static List<EventInfo> EVENT_INFOS;
    public List<UserInfo> userInfos { get; set; }
    public Task getUserInfoList(int index, IBrowserFile file);
}

public class EventService : IEventService
{
    public static List<EventInfo> EVENT_INFOS = new()
    {
        new()
        {
            name = "ONOFFMIX",
            firstRowCellString = "번호",
            nameCellString = "이름",
            emailCellString = "이메일",
            ticketCellString = "그룹",
            checkedCellString = "출석확인일시",
            checkedString = ":",
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
        },
        new() { name = "EVENTUS", isAllowed = false },
    };

    public List<UserInfo> userInfos { get; set; } = new List<UserInfo>();

    public async Task getUserInfoList(int eventInfoIndex, IBrowserFile file)
    {
        var eventInfo = EVENT_INFOS[eventInfoIndex];
        userInfos.Clear();
        var httpStream = file.OpenReadStream();
        var ms = new MemoryStream();
        await httpStream.CopyToAsync(ms);
        httpStream.Close();
        ms.Position = 0;

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
                {
                    return;   
                }
                continue;
            }
            var firstCellString = currentRow.GetCell(0)?.ToString() ?? "";
            if (firstCellString == eventInfo.firstRowCellString)
            {
                isUserInfoStarted = true;
                for (var cellIndex = currentRow.FirstCellNum; cellIndex < currentRow.LastCellNum; cellIndex++)
                {
                    var currentCellString = currentRow.GetCell(cellIndex).ToString();
                    if (currentCellString == eventInfo.nameCellString)
                    {
                        nameIndex = cellIndex;
                    }
                    else if (currentCellString == eventInfo.emailCellString)
                    {
                        emailIndex = cellIndex;
                    }
                    else if (currentCellString == eventInfo.ticketCellString)
                    {
                        ticketIndex = cellIndex;
                    }
                    else if (currentCellString == eventInfo.checkedCellString)
                    {
                        isCheckedIndex = cellIndex;
                    }
                }
                continue;
            }

            if (isUserInfoStarted == false)
            {
                continue;
            }

            userInfos.Add(new()
            {
                personName = currentRow.GetCell(nameIndex).ToString() ?? "",
                email = currentRow.GetCell(emailIndex).ToString() ?? "",
                ticketType = currentRow.GetCell(ticketIndex)?.ToString() ?? "",
                isChecked = !((currentRow.GetCell(isCheckedIndex)?.ToString() ?? "").Contains(
                    eventInfo.checkedString))
            });
        }
    }
}