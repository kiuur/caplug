## First Project
Hello friends, this is my first project, please understand if you find any errors, friends✨, don't forget to give stars and follow 🐈‍⬛
## Thank you to those who have helped me ✨

- [`kiuur`](https://github.com/kiuur) KyuuRzy ( crator )
- [`Hyuu`](https://github.com/hyuux) Hyuu ( my friend )
- [`KiiCode`](https://github.com/mdzakidev) KiiCode/Zaki ( my friend )
- [`xyzencode`](https://github.com/xyzencode) Adriannn ( sengpuh 🥶 )
- [`RullZy`](https://github.com/rlzyy) RullZy ( my friend )

without them this script is nothing, thank you to them 💫

```javascript
console.log("anti aldog 🐕")
```

## A Few Tips for Using Buttons
- to display the "Button List" view
```javascript
let buttons = new Buttons();
buttons.setBody("ngapain bg?");
buttons.addSelection("List Menu");
buttons.makeSections("#! - Show All Menu List!!", "");
buttons.makeRow(
    "#! - Show All Menu",
    "display all menu in the bot !!!",
    "you can see all the features in this bot",
    `${prefix}menuall`
);
await buttons.run(m.chat, client, m);
```
- to display the "Button Copy" view
```javascript
let buttons = new Buttons();   
buttons.setBody("ngapain bg?");
buttons.addCopy("Copy", `puqi`);
await buttons.run(m.chat, client, m);
```

`the rest you can adjust the code in "start/lib/buttondoc.js" 😁`

## License

This project is licensed under the MIT License - see the LICENSE file for details.


© N-Kiuur ZcoderX
