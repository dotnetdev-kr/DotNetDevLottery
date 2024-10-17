namespace DotNetDevLottery.Models;

public enum DrawMachineStatus {
    Init,
    Pending,
    Drawed,
    Done,
}

public class DrawUserEventArgs {
    public DrawMachineStatus Status;
}

public class DrawAnimationEndEventArgs {
    public DrawMachineStatus Status;
    required public UserInfo user;
}