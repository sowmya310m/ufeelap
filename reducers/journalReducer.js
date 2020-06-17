import { AsyncStorage } from 'react-native';



let initialState = {
  entry: null,
  entries: []
}

getDiaryData = async () => {
  let diaryData = await AsyncStorage.getItem('diary');
  return diaryData;
}

saveDiary = async (newDiary) => {
  await AsyncStorage.setItem('diary', newDiary)
  .then(() => {
    console.log("Successfully saved new diary");
  })
  .catch((err) => {
    console.log("Unsuccessfully saved new diary");
  });
}


const journalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DIARY':
      let diaryEntry = Object.assign({}, state);
      diaryEntry.entry = action.entry;
      var subTime = new Date().getTime();
      var date = new Date().getDate(); //Current Date.
      var month = new Date().getMonth() + 1; //Current Month.
      var year = new Date().getFullYear(); //Current year.
      if(date < 10) {
        date = '0'+ date;
      }
      if(month < 10) {
        month = '0'+ month;
      }
      var dates = year + '-' + month + '-' + date;
      const subObj = {entry: action.entry, date: dates}
      diaryEntry.entries.push(subObj);
      getDiaryData().then((res) => {
        let parsedRes = JSON.parse(res);
        if (!parsedRes) {
          parsedRes = [];
        }
        parsedRes.push(subObj);
        diaryEntry.entries = parsedRes;
        let stringifiedDiary = JSON.stringify(parsedRes);
        saveDiary(stringifiedDiary);
      })
      .catch((err) => {
        console.log("Error in diary reducer: ", err);
      });
      return diaryEntry;
    default:
      return state;
  }
};

export default journalReducer;
