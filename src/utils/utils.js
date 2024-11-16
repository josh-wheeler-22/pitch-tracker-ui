export const convertZone = (zone) => {
    switch (zone) {
      case 1:
        return "Top Left";
      case 2:
        return "Top Middle";
      case 3:
        return "Top Right";
      case 4:
        return "Middle Left";
      case 5:
        return "Middle Middle";
      case 6:
        return "Middle Right";
      case 7:
        return "Bottom Left";
      case 8:
        return "Bottom Middle";
      case 9:
        return "Bottom Right";
      default:
        return 0;
    }
  };