import ISO6391 from 'iso-639-1';

export default function getAndSetLanguage(langSelected: any) {
  langSelected = localStorage.getItem('language');
  if (langSelected === null || undefined)
    langSelected = ISO6391.getName(window.navigator.language.substring(0, 2));
  else if (langSelected === null || undefined) langSelected = 'english';
  return langSelected.toLowerCase();
}
