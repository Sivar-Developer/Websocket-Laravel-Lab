import './bootstrap';

Echo.channel('home').listen('NewMessage', (e) => console.log(e.message))
Echo.channel('post.1').listen('PlaygroundEvent', (e) => console.log(e))
