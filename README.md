# ZenTube

Watch youtube videos without distraction.

Yes, there exists the *picture-in-picure* mode as well, but it is so intrusive. The window never get covered by other ones, you need to move the whole window to the side if you want to uncover the window of other activities.

With ZenTube, you create just a simple html with video embedded. With this:

* Watch video without any distraction.
* No intrusive way of Youtube picture-in-picture.

## Lib required

If you are in a Debian like Linux flavor, you may experience an error regarting the `node X11/Xutil.h` file. If so, just run this command to install a few packages in your system:
```
sudo apt-get install libxtst-dev libpng++-dev
```

## How to use

You need first to generate the embedded link via youtube in the *share* options from the video.

Then, just use it in the command line (using npm, that must be installed in your environment).
```
npm run generate <embedded_link> <file_name>
```

Alternativelly, you can also do:
```
node . <embedded_link> <file_name>
```
