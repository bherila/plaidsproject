<div id="Donate Today">


<?php
$mysitename = get_bloginfo('name');
$mysitefeed = get_bloginfo('rss2_url');

 if (get_option('greeting') || get_option('welcomemessage')) {
  if (get_option('greeting')) {
    echo "<h2>" . get_option('greeting') . "</h2>";
    }
  if (get_option('welcomemessage')) {
    echo "<p>" . get_option('welcomemessage') . "</p>";
    }
  } else {
  echo "<h2>Donate Today. Welcome to $mysitename!</h2><p>Thanks for dropping by! Feel free to join the discussion by leaving comments, and stay updated by subscribing to the <a href='$mysitefeed'>RSS feed</a>. See ya around!</p>";
}
 
?>





</div><!-- Closes welcome -->