using DotNetDevLottery.Models;
using Microsoft.AspNetCore.Components.Forms;

namespace DotNetDevLottery.Services;

public interface IEventService
{
    List<EventInfo> EventInfos { get; }
    List<UserInfo> UserInfos { get; }
    void SetUserInfoList(IEnumerable<UserInfo> userInfoList);
    void ClearUserInfoList();
    Task LoadUserInfoListAsync(int index, IBrowserFile file, CancellationToken cancellationToken = default);
}
