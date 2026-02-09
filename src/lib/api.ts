import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Vulnerability {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  requiredAction: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface NewsItem {
  title: string;
  link: string;
  source: string;
  date: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface AdvisoryData {
  date: string;
  vulnerabilities: Vulnerability[];
  news: NewsItem[];
}

export const fetchAdvisoryData = async (days: number = 4): Promise<AdvisoryData> => {
  const response = await axios.get<AdvisoryData>(`${API_BASE_URL}/api/advisory?days=${days}`);
  return response.data;
};
