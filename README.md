# 🌑 󠁻󠁻Dotfiles
>[!NOTE]
>Configuration for my Linux Installs on Gnome DE <br>
>With [Everforest](https://github.com/sainnhe/everforest)🌲 Color Palette
<br>

## 📦 Installation
>[!WARNING]
>I did not extensively test this. You may have to invest more time than though. <br>
>However I will provide assistance to anyone who needs it.

### 💾 Backup
  > This Repo is supposed to be copied into your ```~/.config``` Folder. <br>
  > This means you should back it up in case something happes and you want to return.

### Riced Programs
  - ℹ️ [Nitch](https://github.com/ssleert/nitch) or an alternative
  - 🎶 [Spotify](https://aur.archlinux.org/packages/spotify)
    - 🌶️ [Spicetify](https://spicetify.app/docs/getting-started)
  - 🦊 [Firefox](https://archlinux.org/packages/extra/x86_64/firefox/) or 🐺 [Librefox](https://aur.archlinux.org/packages/librewolf-bin) <br>
    > This Rice features a pretty heavy user.js. For Maximum Security use Librefox + this user.js <br>
    > Else use normal firefox
  - 🎵 [Cava](https://github.com/karlstav/cava)
  - 🎉 [ZSH](https://archlinux.org/packages/extra/x86_64/zsh/)
  - ✏️ [NeoVim](https://github.com/neovim/neovim)
  - 🚀 [Gnome Terminal](https://archlinux.org/packages/extra/x86_64/gnome-terminal/)
  - 🗣️ [Discord](https://archlinux.org/packages/extra/x86_64/discord/)
    - 🌷 [Vencord](https://aur.archlinux.org/packages/vencord-installer)

  <br>
   
### Installation
  1. Download this Repo.
  2. Delete any Configs in ```~/.config``` that would be overridden
     > To avoid any conflicts 
  3. Extract the Repo into ```~/.config```
  4. Lastly create the Symlinks from down below and then apply the themes in Gnome Tweaks. 
  ```
  .config    
  │
  └─── gtk-3.0
  │   │   gtk.css
  │   │   bookmarks
  │   │   settings.ini
  │   
  └─── gtk-4.0
  │   │   gtk.css
  │   │   settings.ini
  │
  └─── gnome
  |   └─── backgrounds
  |   |   | ...
  |   |
  |   └─── themes
  |   |   | ...
  |   |   
  |   └─── icons
  |       |...
  |
  | ...
```

<br>


## 🔗 Symlinks
> I moved some configs from ~ to ~/.config

**💻 ZSH**
```bash
ln -s ~/.config/zsh/.zshrc ~/.zshrc
```

**🐚 Gnome-Shell**
```bash
ln -s ~/.config/gnome/themes/ ~/.local/share/themes
ln -s ~/.config/gnome/icons/ ~/.local/share/icons
ln -s ~/.config/gnome/backgrounds/ ~/.local/share/backgrounds
```

**🐺 Librewolf**
```bash
ln -s ~/.config/librewolf/ ~/.librewolf
ln -s ~/.config/librewolf/ ~/.mozilla/firefox # For firefox
```
<br>
<br>

## ♨️ Sources

>**🎵 [Cava and Gnome Shell](https://codeberg.org/nine_point_eight/config-files) by nine_point_eight <br>**
>**🌈 [Gradience](https://github.com/GradienceTeam/Community/blob/next/curated/everforest.json) by the Gradience Community <br>**
>**🌐 [Firefox Homepage](https://torben.joneit.de/homepage) by nine_point_eight and hosted by me <br>**
>**😌 [Comfy Spicetify Theme](https://github.com/Comfy-Themes/Spicetify) by Comfy-Themes <br>**
>**👣 [Gnome Terminal Theme](https://github.com/em3n/Everforest-GnomeTerminal) by em3n and edited by me <br>**
>**📝 [Papirus Icons](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme) by PapirusDevelopment <br>**
>**🐁 [Everforest Cursors](https://github.com/talwat/everforest-cursors) by talwat <br>**
>**☀️ [Blur My Shell](https://extensions.gnome.org/extension/3193/blur-my-shell/) by aunetx <br>**
>**🌱 [Wallpaper Slideshow Gnome Extensions](https://extensions.gnome.org/extension/6281/wallpaper-slideshow/) by andew z <br>**
>**⚙️ [ZSH Config](https://github.com/sainnhe/dotfiles/blob/master/.zsh-theme/everforest-dark.zsh) by sainnhe <br>**
<br>
<br>

## 🔮 TODO

➜ Nvim Config (IDE and Colorscheme) <br>
➜ GDM Config (Literally everything) <br>
➜ Testing if this works on a clean system <br>
➜ Vencord Config <br>
➜ Writing more detailed Guide <br>
