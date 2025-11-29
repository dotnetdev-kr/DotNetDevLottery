using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using DotNetDevLottery.Models;
using Blazored.LocalStorage;

namespace DotNetDevLottery.Components.Random;

public partial class MachineAnimation : ComponentBase, IAsyncDisposable
{
    private const string SETTINGS_KEY = "ball-design-settings";
    private const long MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB

    ElementReference machineElement;
    private DotNetObjectReference<MachineAnimation>? componentRef;
    IJSObjectReference? machineUtils;

    [Parameter, EditorRequired]
    required public UserInfo[] UserInfoList { get; set; }

    [Parameter]
    public EventCallback OnBeforeDrawMachine { get; set; }

    [Parameter]
    public EventCallback<DrawUserEventArgs> OnDrawUser { get; set; }

    [Parameter]
    public EventCallback<DrawAnimationEndEventArgs> OnDrawAnimationEnd { get; set; }

    UserInfo? SelectedUserInfo = null;
    DrawMachineStatus Status = DrawMachineStatus.Init;
    string TriggerButtonClass(bool isDisabled) => isDisabled ? "" : "success";
    string TriggerButtonVariant(bool isDisabled) => isDisabled ? "secondary" : "";
    int PersonCount = 0;
    int TargetPersonCount = 1;
    int RemainedPersonCount = 0;
    int PendingDrawCount = 0;
    List<int> WinnedUserList = new List<int>();
    BallDesignSettings ballSettings = new();
    string BallStyleVariables => GenerateBallStyleVariables();

    protected override async Task OnInitializedAsync()
    {
        PersonCount = UserInfoList.Count();
        RemainedPersonCount = PersonCount;
        if (PersonCount == 0)
        {
            return;
        }
        machineUtils = await JSRuntime.InvokeAsync<IJSObjectReference>(
        "import",
        "/js/Components/Random/MachineAnimation.r.js"
        );
        componentRef = DotNetObjectReference.Create(this);
        await machineUtils.InvokeVoidAsync(
        "init",
        PersonCount,
        machineElement,
        componentRef,
        nameof(OnDrawMachine),
        nameof(OnDrawMachineAnimationEnd)
        );
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await LoadBallSettings();
            StateHasChanged();
        }
    }

    private async Task LoadBallSettings()
    {
        var savedSettings = await LocalStorage.GetItemAsync<BallDesignSettings>(SETTINGS_KEY);
        if (savedSettings != null)
        {
            ballSettings = savedSettings;
        }
    }

    private string GenerateBallStyleVariables()
    {
        var styles = new List<string>();

        if (!string.IsNullOrEmpty(ballSettings.BallImageUrl))
        {
            styles.Add($"--ball-image: url('{ballSettings.BallImageUrl}')");
        }
        if (!string.IsNullOrEmpty(ballSettings.DrawedBallImageUrl))
        {
            styles.Add($"--drawed-ball-image: url('{ballSettings.DrawedBallImageUrl}')");
        }

        styles.Add($"--ball-color: {ballSettings.BallColor}");
        styles.Add($"--ball-border-color: {ballSettings.BallBorderColor}");
        styles.Add($"--drawed-ball-color: {ballSettings.DrawedBallColor}");
        styles.Add($"--drawed-ball-text-color: {ballSettings.DrawedBallTextColor}");

        return string.Join("; ", styles);
    }

    public async Task RefreshSettings()
    {
        await LoadBallSettings();
        StateHasChanged();
    }

    public async Task OnClickButton()
    {
        if (machineUtils == null || Status == DrawMachineStatus.Pending)
        {
            return;
        }
        SelectedUserInfo = null;
        Status = DrawMachineStatus.Pending;
        PendingDrawCount = TargetPersonCount;
        Console.WriteLine($"TargetPersonCount: {TargetPersonCount}");
        await machineUtils.InvokeVoidAsync("executeDrawBall", TargetPersonCount);
        await OnBeforeDrawMachine.InvokeAsync();
    }

    [JSInvokable]
    public async Task<UserInfo?> OnDrawMachine()
    {
        if (RemainedPersonCount < 1)
        {
            // TODO: 남은 인원 없음 알림
            return null;
        }
        var randomObj = new System.Random();
        var index = randomObj.Next(RemainedPersonCount);
        while (WinnedUserList.Contains(index))
        {
            index = randomObj.Next(RemainedPersonCount);
        }
        SelectedUserInfo = UserInfoList.ElementAtOrDefault(index);
        if (SelectedUserInfo == null)
        {
            return null;
        }
        WinnedUserList.Add(index);
        Status = DrawMachineStatus.Drawed;
        // TODO: 현재에는 사용하고 있지 않음. 추후 관련 기능 추가 없을 경우 삭제.
        await OnDrawUser.InvokeAsync(new DrawUserEventArgs
        {
            Status = Status
        });
        return SelectedUserInfo;
    }

    [JSInvokable]
    public async Task OnDrawMachineAnimationEnd()
    {
        if (SelectedUserInfo == null)
        {
            return;
        }
        PendingDrawCount--;

        if (PendingDrawCount <= 0)
        {
            Status = DrawMachineStatus.Done;
        }

        await OnDrawAnimationEnd.InvokeAsync(new DrawAnimationEndEventArgs
        {
            user = SelectedUserInfo,
            Status = Status
        });
    }

    async ValueTask IAsyncDisposable.DisposeAsync()
    {
        if (machineUtils is not null)
        {
            await machineUtils.InvokeVoidAsync("executeRemoveEngine");
            await machineUtils.DisposeAsync();
        }
        componentRef?.Dispose();
    }
}
