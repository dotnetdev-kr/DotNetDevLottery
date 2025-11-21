namespace DotNetDevLottery.Models;

public class BallDesignSettings
{
    public string? BallImageUrl { get; set; }
    public string? DrawedBallImageUrl { get; set; }

    // 이미지가 없을 때 사용할 기본 색상
    public string BallColor { get; set; } = "#666666";
    public string BallBorderColor { get; set; } = "#222222";
    public string DrawedBallColor { get; set; } = "#DDDDDD";
    public string DrawedBallTextColor { get; set; } = "#000000";
}
