export class Constant {
  constructor(private val: string, private faIcon?: string, private faSet?: string) {
  }

  public getString(): string {
    return this.val;
  }

  public getFaIcon(): string {
    return this.faIcon;
  }

  public getFaSet(): string {
    return this.faSet;
  }
}

export class Constants {
  readonly ANOTHER_PAGE = new Constant('Another Page', 'fa-file', 'fa');
  readonly BIOGRAPHY = new Constant('Biography', 'fa-user', 'fa');
  readonly HOME = new Constant('Home', 'fa-home', 'fa');
  readonly MY_EMAIL = new Constant('email@example.com', 'fa-envelope', 'fa');
  readonly MY_FACEBOOK_URL = new Constant('https://www.facebook.com/', 'fa-facebook-square', 'fab');
  readonly MY_GITHUB_URL = new Constant('https://github.com/', 'fa-github', 'fab');
  readonly MY_JOB_TITLE = new Constant('My Job Title');
  readonly MY_LOCATION = new Constant('My Location');
  readonly MY_LINKEDIN_URL = new Constant('https://www.linkedin.com/', 'fa-linkedin', 'fab');
  readonly MY_NAME = new Constant('First Last');
  readonly MY_NAME_IS = new Constant('My name is');
  readonly MY_TWITTER_URL = new Constant('https://twitter.com', 'fa-twitter', 'fab');
}
