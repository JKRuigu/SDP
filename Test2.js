axios.get('https://example.com/getSomething', {
 headers: {
   Authorization: 'Bearer ' + token //the token is a variable which holds the token
 }
})

adb reverse tcp:8000 tcp:8000