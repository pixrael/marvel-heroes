# Marvel Hero App

This project is a short app to find marvel heroes using the Marvel Hero api. In the app the user can do the next:

- Load the 50 heroes in the main view of the app.
- Select/unselect heroes as favorite.
- Check the list of favorite heroes selected.
- See the details of a hero and comics where he/she appears.
- Comics are sort by year.
- Reduce the limit by fetch request in order to have more speed in the data fetches.

To see the project running, please visit the next link

-[Marvel app](https://66bc8dd24adcc47bf27bdfed--whimsical-genie-a016df.netlify.app/)

IMPORTANT: these days the marvel api had been very slow [Marvel api](https://developer.marvel.com/) I hope the Marvel servers improve the speed if not try the app using the feature to limit to 5 results per request fetch.

## Used tecnologies, libraries and more

- Vite, as project generator tooling [Vite](https://vitejs.dev/)
- React & typescript
- Context api, to manage the state of the application
- SWR, [SWR](https://swr.vercel.app/) to manage cache invalidation strategy
- fetch [Fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to manage cache invalidation strategy
- Sass, for styles
- Vitest, as testing framework [Vitest](https://vitest.dev/)
- React Testing Library [React Testing Library](https://testing-library.com/)
- Others: lodash.debounce, lodash.isequal, react-router-dom

## Clone, install and run project in local

1 - Clone the repo from github, git clone https://github.com/pixrael/marvel-heroes.git
2 - Inside the root folder `npm install`
3 - Add a file in the root named ".env.local" with the marvel api variables, here an example:

```js
VITE_REACT_API_MARVEL_URL = https://gateway.marvel.com/v1/public
VITE_REACT_PUBLIC_KEY = YOUR_MARVEL_PUBLIC_KEY
VITE_REACT_MD5 = YOUR_MD5_CODE
```

In other to obtain the keys please follow these instructions:
To get the keys you should use a marvel account and see them at https://developer.marvel.com/account.
Be aware that the MD5 will result from a encrypt operation between the private key an a ts value, in the instructions https://developer.marvel.com/documentation/authorization explains about it.

## Test and coverage

Few unit test were added, more for demostration purposes about how to test components that access to the context, in order to see it you can run

```js
npm run test
```

If you want to see the coverage report you can run

```js
npm run test-coverage
```

## Front end architecture

In few words, the state is saved and managed through different contexts:
-ComicsByCharacterIdContext, contains data about the request of comics (isLoading, error, results) that one hero appears and data of the result of the request.
-DetailsCharacterContext, contains data about the request of details (isLoading, error, results) of a hero and data of the result of the request.
-AllCharacterContext, contains data about the request to fetch heroes, (isLoading, error, results) and data of the result of the request. It saves to the data of the input search from the AllCharactersPage
-FavoriteContext, contains data about every request to fetch every favorite hero, (isLoading, error, results) and data of the result of the request. It saves to the data of the input search from the FavoriteHeroPage. And the ids of the hero selected as favorites.
-SetupAppContext, contains data related to the number of results made on every fetch.

The components should react on changes in the context, for example when the AllCharacterContext.results changes (because data have came from the server and have been saved in the context) then the component AllCharacterList displays the cards of the heros. Or when the user interacts with the input search of the AllCharacterPage then that value is saved in AllCharacterContext.keywords.

Here the feature Search heroes in a more graphical explanation
[Search Hero Feature](https://drive.google.com/file/d/1gNYaDzMuAMzxu2MLtAf6nvKW0cgmGfgt/view?usp=drive_link)
