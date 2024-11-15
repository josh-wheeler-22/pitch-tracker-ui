export const convertZone = (zone) => {
    switch (zone) {
      case '0.0':
        return "Top Left";
      case '0.1':
        return "Top Middle";
      case '0.2':
        return "Top Right";
      case '1.0':
        return "Middle Left";
      case '1.1':
        return "Middle Middle";
      case '1.2':
        return "Middle Right";
      case '2.0':
        return "Bottom Left";
      case '2.1':
        return "Bottom Middle";
      case '2.2':
        return "Bottom Right";
      default:
        return "";
    }
  };