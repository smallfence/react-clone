import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from '!@#/App.jsx';

import { load, loadMessages, IntlProvider, LocalizationProvider } from "@progress/kendo-react-intl";
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import bgNumbers from 'cldr-numbers-full/main/ko/numbers.json';
import bgLocalCurrency from 'cldr-numbers-full/main/ko/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/ko/ca-gregorian.json';
import bgDateFields from 'cldr-dates-full/main/ko/dateFields.json';
import deNumbers from 'cldr-numbers-full/main/de/numbers.json';
import deLocalCurrency from 'cldr-numbers-full/main/de/currencies.json';
import deCaGregorian from 'cldr-dates-full/main/de/ca-gregorian.json';
import deDateFields from 'cldr-dates-full/main/de/dateFields.json';
import language from "!@#/config/kendo/language.json";

load(likelySubtags, currencyData, weekData, bgLocalCurrency, bgNumbers, bgCaGregorian, 
  bgDateFields, deLocalCurrency, deNumbers, deCaGregorian, deDateFields);

loadMessages(language, "ko");

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <LocalizationProvider language={'ko'} >
      <IntlProvider locale={'ko-KR'}>
        <App />
      </IntlProvider>
    </LocalizationProvider>
  </Fragment>
)
