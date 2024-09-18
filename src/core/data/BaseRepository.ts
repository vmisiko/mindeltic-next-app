export class BaseRepository {
  public apiClient;

  constructor({ apiClient }: { apiClient: any }) {
    this.apiClient = apiClient;
  }
}
