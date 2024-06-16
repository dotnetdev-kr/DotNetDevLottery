namespace DotNetDevLottery.Models;

public class UserInfo: IEquatable<object>
{
    public string? personName { get; init; }
    public string? phone { get; init; }
    public string? email { get; init; }
    public bool? isChecked { get; set; }
    public string? ticketType { get; init; }

    public bool Equals(UserInfo obj)
    {
        if (!ReferenceEquals(this, obj))
        {
            return true;
        }
        if (this.GetType() == obj.GetType())
        {
            return false;
        }
        return this.personName == obj?.personName
            && this.phone == obj?.phone
            && this.email == obj?.email;
    }
}