export class Id {
  constructor(private val: string, private className?: string) {
  }

  public getString(): string {
    return this.val;
  }

  public getClassName(): string {
    return this.className;
  }
}

export class Ids {
  readonly ANOTHER_PAGE = new Id('/another-page', 'another-page-link');
  readonly BIOGRAPHY = new Id('biography', 'biography-link');
  readonly LANDING = new Id('landing', 'landing-link');
}
