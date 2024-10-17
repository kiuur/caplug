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
case 'menu':{
let wow = `hi ${pushname} 🪸, i am an automated system (WhatsApp bot) that can help to do something search and get data / information only through WhatsApp.

 ▢ Creator : N-Kiuur ZcoderX
 ▢ Library : WS-Baileys
 ▢ Mode : ${client.public ? 'Public' : 'Self'}

*N-Kiuur* is a WhatsApp bot developed using NodeJS and Baileys library. This bot was created to provide a better user experience in interacting on the platform.`
let buttons = new Buttons();   
buttons.setBody(wow)
buttons.addSelection("List Menu");
buttons.makeSections("#! - Show All Menu List!!", "");
buttons.makeRow(
    "#! - Show All Menu",
    "display all menu in the bot !!!",
    "you can see all the features in this bot",
    `${prefix}menuall`
);
await buttons.run(m.chat, client, m);
}
break
```
- to display the "Button Copy" view
```javascript
```
## License

This project is licensed under the MIT License - see the LICENSE file for details.
