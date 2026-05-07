export type AnnouncementType = 'Info' | 'Sale' | 'Warning' | 'Maintenance' | 'Release';

export interface Announcement {
  id: string;
  enabled: boolean;
  text: string;
  buttonText: string;
  buttonLink: string;
  type: AnnouncementType;
  startDate: string;
  endDate: string;
}
