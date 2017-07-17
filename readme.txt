=== Plugin Name ===
Contributors: simonbot, pierredelacelle
Tags: simonbot, performance, monitoring, front-end, yslow, quality
Requires at least: 2.8
Tested up to: 3.5
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Monitor and check your Wordpress front-end performance & quality automatically. Get results, analyse them and find bottlenecks.

== Description ==

Automatically check your website's quality & performance with Simonbot. Get results, analyse them and find bottlenecks.

It's free and easy to install/setup.

WP Simonbot comes with several indicators (load time, page weight, imageweight, external JavaScript files, YSlow score, missing files, etc). It offers you a quick overview of any bottlenecks on your website.

With WP Simonbot, you can keep an eye on the real performances of your
website after changing your theme, installing/upgrading a plugin, adding
some widgets, etc.

Note: Using WP Simonbot is only possible with a Simonbot.com account.
Registration is free, and possible within the plugin.

== Installation ==

This is how to install WP Simonbot and get it working.

1. Login as an administrator to your WordPress Admin account. Using the
"Add New" menu option under the "Plugins" section of the navigation, you
can either search for: simonbot or if you've downloaded the plugin
already, click the "Upload" link, find the .zip file you download and
then click "Install Now". Or you can unzip and FTP upload the plugin to
your plugins directory (wp-content/plugins/). In either case, when done
wp-content/plugins/wp-simonbot/ should exist.
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Click on Wizard
4. Enter your Simonbot login & password, or Create an account
5. Select the URLs you want to monitor
6. Wait few minutes and your performances informations will appear in Tools > Simonbot

== Frequently Asked Questions ==

= On the setup, I only see the homepage and last 10 posts, is that
normal? =

Yes. We are working on something more flexible, but for the first
release, we took that decision : homepage and the last 10 posts.
If you want to monitor others URLs, you can go on [your Simonbot
account](https://simonbot.com) and add manually you urls in the cluster
WP Simonbot created for you.

= Do I need to pay for a Simonbot account? =

No. We have a Free plan available, and you can use it with WP Simonbot.

= Which WordPress versions are supported? =

The oldest we've tested is WordPress 2.8 and should be fine to any
Wordpress vers 3.X.

= What are the requirements on the server side? =

PHP5 is required.
libcurl installed is better but not mandatory.

= Will it slow down my website? =

No. All the checks on your website are external, done by Simonbot
infrastructure. You Wordpress is processing the smallest ammount of informations
possible.

= Will the plugin interfere with other plugins or widgets? =

It shouldn't! If you are experiencing an unexpected behaviour, open a
support ticket and we will have a look.

= Ok, my website is slow but I don't know how to deal with it =

Feel free to [contact us](https://simonbot.com/contact "Simonbot
contact"), we can help you out.

= Where can I find my alerts on WP Simonbot =

Alerts are only available through your simonbot.com interface for now.
We are planning to integrate it into WP Simonbot later.

= I have some feedback or suggestion for WP Simonbot =

Fill in a support ticket or contact us, we will be pleased to hear you!

== Screenshots ==

1. Your dashboard is displaying an overview of the loadtime of all your urls and the list of them.
2. The URL dashboard is displaying all the key indicators for this url
3. And then you can access to the details of this indicator. (here the number of requests)
4. Easy setup : Enter your Simonbot login & password, or Create an account and validate
5. Easy setup : Select the URLs you want to monitor and validate

== Changelog ==

= 1.0.0 =
* Initial release...
