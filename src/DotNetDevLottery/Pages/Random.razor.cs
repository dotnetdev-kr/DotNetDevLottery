using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.JSInterop;
using DotNetDevLottery.Models;
using DotNetDevLottery.Components.Random;

namespace DotNetDevLottery.Pages;

public partial class Random : ComponentBase, IAsyncDisposable
{
  IJSObjectReference? lottieUtils;
  ElementReference animationElement;
  MachineAnimation? machineAnimation;
  List<UserInfo> UserInfoList = new List<UserInfo>();
  List<UserInfo> WinnedUserList = new List<UserInfo>();
  Boolean IsPlayAnimation = false;
  int PersonCount = 0;

  string EffectClass(bool IsPlayAnimation) => IsPlayAnimation ? "effect" : "effect effect--disabled";

  protected override async Task OnInitializedAsync()
  {
    UserInfoList = EventService.UserInfos.ToList();
    PersonCount = UserInfoList.Count;

    if (PersonCount == 0)
    {
      NavigationManager.NavigateTo("/");
      return;
    }

    lottieUtils = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "/js/Pages/Random.r.js");
  }

  public void OnBeforeDrawMachine()
  {
    IsPlayAnimation = false;
  }
  public async Task OnDrawAnimationEnd(DrawAnimationEndEventArgs eventArgs)
  {
    if (eventArgs.user == null)
    {
      NavigationManager.NavigateTo("/");
      return;
    }
    WinnedUserList.Add(eventArgs.user);
    if (lottieUtils == null)
    {
      return;
    }
    IsPlayAnimation = true;
    await lottieUtils.InvokeVoidAsync("startLottie", animationElement);
  }
  async ValueTask IAsyncDisposable.DisposeAsync()
  {
    if (lottieUtils is not null)
    {
      await lottieUtils.DisposeAsync();
    }
  }
}
