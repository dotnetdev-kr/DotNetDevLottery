namespace BlazorApp1.Models;

public class EventInfo
{
    public string name { get; init; }
    public bool isAllowed { get; init; } = true;
    public string firstRowCellString { get; init; }
    public string nameCellString { get; init; }
    public string emailCellString { get; init; }
    public string ticketCellString { get; init; }
    public string checkedCellString { get; init; }
    public string checkedString { get; init; }
    public bool isOldExcel { get; init; } = false;
}