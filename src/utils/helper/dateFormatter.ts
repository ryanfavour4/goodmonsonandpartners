const dateOptions = {
  year: "numeric" as const,
  month: "long" as const,
  day: "numeric" as const
};

const timeOptions = {
  hour: "numeric" as const,
  minute: "numeric" as const,
  timeZoneName: 'short' as const,
};

export const formatDate = (date: Date) => { 
  return date.toLocaleDateString("en-US", dateOptions);
}

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", timeOptions);
}
