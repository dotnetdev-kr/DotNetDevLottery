namespace DotNetDevLottery.Models;

public class UserInfo
{
    public string? personName { get; init; }
    public string? email { get; init; }
    public bool? isChecked { get; set; }
    public string? ticketType { get; init; }
}