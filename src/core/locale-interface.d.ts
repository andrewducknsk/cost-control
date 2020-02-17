export namespace Locale {
  interface HeaderLocale {
    readonly title: string;
  }

  interface NavigationLocale {
    readonly links: Array<NavigationLinks>;
  }

  export interface GreetingLocale {
    readonly title: string;
    readonly description: string;
    readonly buttonLabel: string;
  }

  interface AddingNoteLocale {
    readonly title: string;
    readonly expenseNameLabel: string;
    readonly expenseNamePlaceholder: string;
    readonly expenseTypeLabel: string;
    readonly expenseDateLabel: string;
    readonly expenseAmountLabel: string;
    readonly expenseAmountPlaceholder: string;
    readonly buttonLabel: string;
  }

  interface SettingBar {
    readonly title: string;
    readonly buttons: Array<SettingBarButtons>;
  }

  interface History {
    readonly title: string;
    readonly emptyMessage: string;
  }
}

interface NavigationLinks {
  readonly route: string;
  readonly label: string;
}

interface SettingBarButtons {
  readonly label: string;
  readonly action: string;
  readonly styleType: string;
}
