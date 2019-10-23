import { Injectable } from '@angular/core';
import { ExternalLink, NavigationConstants, NavigationLink } from './menu.interface';
import { Ui } from '../shared/services/ui.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public ui: Ui) { }

  populateNavigationLinks(callback: (result: NavigationLink[]) => void) {
      callback(
        [
          {
            path: this.ui.ID.LANDING.getString(),
            navType: NavigationConstants.SCROLL,
            className: this.ui.ID.LANDING.getClassName(),
            fontSet: this.ui.CONSTANTS.HOME.getFaSet(),
            fontIcon: this.ui.CONSTANTS.HOME.getFaIcon(),
            label: this.ui.CONSTANTS.HOME.getString(),
          },
          {
            path: this.ui.ID.BIOGRAPHY.getString(),
            navType: NavigationConstants.SCROLL,
            className: this.ui.ID.BIOGRAPHY.getClassName(),
            fontSet: this.ui.CONSTANTS.BIOGRAPHY.getFaSet(),
            fontIcon: this.ui.CONSTANTS.BIOGRAPHY.getFaIcon(),
            label: this.ui.CONSTANTS.BIOGRAPHY.getString(),
          },
          {
            path: this.ui.ID.ANOTHER_PAGE.getString(),
            navType: NavigationConstants.NAVIGATE_TO,
            className: this.ui.ID.ANOTHER_PAGE.getClassName(),
            fontSet: this.ui.CONSTANTS.ANOTHER_PAGE.getFaSet(),
            fontIcon: this.ui.CONSTANTS.ANOTHER_PAGE.getFaIcon(),
            label: this.ui.CONSTANTS.ANOTHER_PAGE.getString(),
          },
        ]
      );
  }

  populateExternalLinks(callback: (result: ExternalLink[]) => void) {
    callback(
      [
        {
          url: this.ui.CONSTANTS.MY_LINKEDIN_URL.getString(),
          fontSet: this.ui.CONSTANTS.MY_LINKEDIN_URL.getFaSet(),
          fontIcon: this.ui.CONSTANTS.MY_LINKEDIN_URL.getFaIcon(),
          label: 'LinkedIn',
        },
        {
          url: this.ui.CONSTANTS.MY_GITHUB_URL.getString(),
          fontSet: this.ui.CONSTANTS.MY_GITHUB_URL.getFaSet(),
          fontIcon: this.ui.CONSTANTS.MY_GITHUB_URL.getFaIcon(),
          label: 'GitHub',
        },
        {
          url: this.ui.CONSTANTS.MY_TWITTER_URL.getString(),
          fontSet: this.ui.CONSTANTS.MY_TWITTER_URL.getFaSet(),
          fontIcon: this.ui.CONSTANTS.MY_TWITTER_URL.getFaIcon(),
          label: 'Twitter',
        },
        {
          url: this.ui.CONSTANTS.MY_FACEBOOK_URL.getString(),
          fontSet: this.ui.CONSTANTS.MY_FACEBOOK_URL.getFaSet(),
          fontIcon: this.ui.CONSTANTS.MY_FACEBOOK_URL.getFaIcon(),
          label: 'Facebook',
        },
        {
          url: this.ui.getMailToLink(),
          fontSet: this.ui.CONSTANTS.MY_EMAIL.getFaSet(),
          fontIcon: this.ui.CONSTANTS.MY_EMAIL.getFaIcon(),
          label: 'Email',
        },
      ]
    )
  }
}
