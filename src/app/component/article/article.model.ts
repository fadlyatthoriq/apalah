export class ArticleModel {
  public title: string;
  public link: string;
  public votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const url = new URL(this.link);
      return url.hostname;
    } catch {
      return '';
    }
  }
}
