using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.JSInterop;
using DotNetDevLottery.Components;

namespace DotNetDevLottery.Pages;

public partial class Main : ComponentBase, IAsyncDisposable
{
  // TODO: Dropzone 분리
  IJSObjectReference? elementUtils;
  InputFile? inputFileElement;
  ElementReference dropzoneElement;

  IBrowserFile? targetFile;
  bool isLoading = false;
  bool isSecondFilterOpened = false;
  int selectedEventCompanyIndex = 0;
  List<string> groupNames = new();
  List<bool> filterGroup = new();
  bool filterCheckedIn = true;
    private BallDesignSettingsDialog? settingsDialog;

  string InfoButtonVariant(bool isSelected) => isSelected ? "primary" : "secondary";
  string InfoButtonTreatment(bool isSelected) => isSelected ? "fill" : "outline";

  protected override async Task OnInitializedAsync()
  {
    elementUtils = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "/js/Pages/Main.r.js");
    await elementUtils.InvokeVoidAsync("addDropEventToChangeInputFile", dropzoneElement);
  }

  private void OnClickIndexButton(int index)
  {
    selectedEventCompanyIndex = index;
    this.StateHasChanged();
  }

  private async Task OnClickFileButton()
  {
    if (elementUtils == null)
    {
      return;
    }
    await elementUtils.InvokeVoidAsync("clickElement", inputFileElement?.Element);
  }

  private void OnChangeCheckbox(int index)
  {
    filterGroup[index] = !filterGroup[index];
  }
  private void OnChangeFilterCheckInCheckbox()
  {
    filterCheckedIn = !filterCheckedIn;
  }

  private void OnInputFileInput(InputFileChangeEventArgs eventArgs)
  {
    targetFile = eventArgs.File;
  }

  private async Task OnClickNextButton()
  {
    if (targetFile == null)
      return;

    isLoading = true;

    try
    {
      await EventService.LoadUserInfoListAsync(selectedEventCompanyIndex, targetFile);
      isSecondFilterOpened = true;
      groupNames = EventService.UserInfos
      .GroupBy((userInfo) => userInfo.ticketType)
      .Select((userInfoGroup) => userInfoGroup.First().ticketType ?? string.Empty)
      .ToList();
      filterGroup = groupNames.Select((_) => true).ToList();
    }
    catch (Exception e)
    {
      Console.Error.WriteLine(e.ToString());
    }
    finally
    {
      isLoading = false;
    }
  }

  private void OnClickGoNextPageButton()
  {
    var targetGroupNames = groupNames.Where((groupName, index) => filterGroup[index]).ToList();
    var currentUsers = EventService.UserInfos;
    var selectedUsers = currentUsers.Where(info =>
    {
      if (!targetGroupNames.Contains(info.ticketType ?? string.Empty))
        return false;

      if (filterCheckedIn && !(info.isChecked ?? false))
        return false;

      return true;
    }).ToList();

    EventService.SetUserInfoList(selectedUsers);
    NavigationManager.NavigateTo("/random");
  }

  async ValueTask IAsyncDisposable.DisposeAsync()
  {
    if (elementUtils is not null)
    {
      await elementUtils.DisposeAsync();
    }
  }
}