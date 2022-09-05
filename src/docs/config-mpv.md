# MPV Config

my personal preference when configuring mpv.



## Window

`border` shows the titlebar, minimize/maximize button, this is usually not the default.

`no-keepaspect-window` good if you're using a tiling window manager, otherwise I have this off.

`keep-open=yes` always keep the player open until I close it.

## Audio

`alang=jpn,jp,eng,en` audio language order of preference, I mostly watch anime sub.

`volume-max=500` love software volume control, and the fact that this works. 


## Subtitles

`sub-ass-override=strip` force override subtitle preferences ([might break stuff](https://github.com/mpv-player/mpv/issues/5922)).

`sub-ass-force-margins=yes` I really don't even know but why not.

`embeddedfonts=no` I like the same font everytime.

Look / feel: 

- `sub-font=Qlassik`
- `sub-color="#ffffffff"`
- `sub-border-color="#101010"`
- `sub-border-size=3`
- `sub-font-size=48`
- `sub-gray=yes`
- `sub-bold=yes`


## OSC

`script-opts=osc-timetotal=yes,osc-layout=bottombar,osc-seekbarstyle=bar,osc-deadzonesize=0.5,osc-minmousemove=2,osc-hidetimeout=1000`

Each param:

- `osc-timetotal=yes` show the total time instead of time remaining
- `osc-layout=bottombar` put the bar at the bottom
- `osc-seekbarstyle=bar` seek bar is still just a bar 
- `osc-deadzonesize=0.5` half the window size deadzone 
- `osc-minmousemove=2` minimum mouse movement to show osc in pixels
- `osc-hidetimeout=1000` hide osc after 1 second


## input.conf

```
WHEEL_UP      add volume 2
WHEEL_DOWN    add volume -2
-             add volume -2
=             add volume 2
```


## mpv.conf

```
#
# Example mpv configuration file
#
# Warning:
#
# The commented example options usually do _not_ set the default values. Call
# mpv with --list-options to see the default values for most options. There is
# no builtin or example mpv.conf with all the defaults.
#
#
# Configuration files are read system-wide from /usr/local/etc/mpv.conf
# and per-user from ~/.config/mpv/mpv.conf, where per-user settings override
# system-wide settings, all of which are overridden by the command line.
#
# Configuration file settings and the command line options use the same
# underlying mechanisms. Most options can be put into the configuration file
# by dropping the preceding '--'. See the man page for a complete list of
# options.
#
# Lines starting with '#' are comments and are ignored.
#
# See the CONFIGURATION FILES section in the man page
# for a detailed description of the syntax.
#
# Profiles should be placed at the bottom of the configuration file to ensure
# that settings wanted as defaults are not restricted to specific profiles.

##################
# video settings #
##################

#gpu-api=vulkan
#gpu-context=winvk
profile=gpu-hq
scale=ewa_lanczos
#scale-blur=0.981251
video-sync=display-resample
linear-downscaling=no



##################
# audio settings #
##################

# Set default audio language
alang=jpn,jp,eng,en

# Specify default audio device. You can list devices with: --audio-device=help
# The option takes the device string (the stuff between the '...').
#audio-device=alsa/default

# Do not filter audio to keep pitch when changing playback speed.
#audio-pitch-correction=no

# Output 5.1 audio natively, and upmix/downmix audio with a different format.
#audio-channels=5.1
# Disable any automatic remix, _if_ the audio output accepts the audio format.
# of the currently played file. See caveats mentioned in the manpage.
# (The default is "auto-safe", see manpage.)
#audio-channels=auto

# Set the max volume
volume-max=500


##################
#    Subtitle    #
##################
slang=eng,en,english

# forces mpv font settings, this may break stuff https://github.com/mpv-player/mpv/issues/5922
sub-ass-override=strip        # use u hotkey to toggle this
embeddedfonts=no

sub-ass-force-margins=yes

sub-font=Qlassik
sub-color="#ffffffff"
sub-border-color="#101010"
sub-border-size=3
sub-font-size=48
sub-gray=yes
sub-bold=yes


##################
#   Screenshot   #
##################

# Tag screenshots with appropriate color space
screenshot-tag-colorspace=yes

# Image format to save screenshots as
# Available choices: png jpg jpeg webp
screenshot-format=png

# the directory for screenshots to be saved
screenshot-directory=X:\\mpv\\.screenshots\\

##################
#      OSC       #
##################
script-opts=osc-timetotal=yes,osc-layout=bottombar,osc-seekbarstyle=bar,osc-deadzonesize=0.5,osc-minmousemove=2,osc-hidetimeout=1000

##################
#    Stream      #
##################
#ytdl-format=bestvideo[height<=?1080][fps<=30]+bestaudio/best[height<=?1080]
demuxer-max-bytes=2048MiB
demuxer-max-back-bytes=1024MiB
user-agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 Edg/98.0.1108.62'

##################
# other settings #
##################


# Start in fullscreen mode by default.
#fs=yes

# force starting with centered window
#geometry=50%:50%

# don't allow a new window to have a size larger than 90% of the screen size
#autofit-larger=90%x90%

# Do not close the window on exit.
keep-open=yes

# Do not wait with showing the video window until it has loaded. (This will
# resize the window once video is loaded. Also always shows a window with
# audio.)
force-window=immediate

# Disable the On Screen Controller (OSC).
#osc=no

# Keep the player window on top of all other windows.
#ontop=yes

# Specify high quality video rendering preset (for --vo=gpu only)
# Can cause performance problems with some drivers and GPUs.
#profile=gpu-hq

# Force video to lock on the display's refresh rate, and change video and audio
# speed to some degree to ensure synchronous playback - can cause problems
# with some drivers and desktop environments.
#video-sync=display-resample

# Enable hardware decoding if available. Often, this does not work with all
# video outputs, but should work well with default settings on most systems.
# If performance or energy usage is an issue, forcing the vdpau or vaapi VOs
# may or may not help.
#hwdec=auto

# Pretend to be a web browser. Might fix playback with some streaming sites,
# but also will break with shoutcast streams.
#user-agent="Mozilla/5.0"

# cache settings
#
# Use a large seekable RAM cache even for local input.
#cache=yes
#
# Use extra large RAM cache (needs cache=yes to make it useful).
#demuxer-max-bytes=500M
#demuxer-max-back-bytes=100M
#
# Disable the behavior that the player will pause if the cache goes below a
# certain fill size.
#cache-pause=no
#
# Store cache payload on the hard disk instead of in RAM. (This may negatively
# impact performance unless used for slow input such as network.)
#cache-dir=~/.cache/
#cache-on-disk=yes

# Change subtitle encoding. For Arabic subtitles use 'cp1256'.
# If the file seems to be valid UTF-8, prefer UTF-8.
# (You can add '+' in front of the codepage to force it.)
#sub-codepage=cp1256

# You can also include other configuration files.
#include=/path/to/the/file/you/want/to/include

############
# Profiles #
############

# The options declared as part of profiles override global default settings,
# but only take effect when the profile is active.

# The following profile can be enabled on the command line with: --profile=eye-cancer

#[eye-cancer]
#sharpen=5
```