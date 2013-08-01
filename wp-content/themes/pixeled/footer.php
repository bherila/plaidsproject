<div id="morefoot">

<div class="col1">
<h3>Looking for something?</h3>
<p>Use the form below to search the site:</p>
<?php include (TEMPLATEPATH . '/searchform.php'); ?>
<p>Still not finding what you're looking for? Drop a comment on a post or contact us so we can take care of it!</p>
<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer_left') ) : ?>
<?php endif; ?>
</div>

<div class="col2">
<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer_middle') ) : ?>
<h3>Visit our friends!</h3><p>A few highly recommended friends...</p><ul><?php wp_list_bookmarks('title_li=&categorize=0'); ?></ul>
<?php endif; ?>
</div>



<div class="cleared"></div>
</div><!-- Closes morefoot -->



<div id="footer">
<div id="footerleft">
<p> © The Brown Global HELP Initiative.  2009-2010.  All rights reserved.<br>
The Brown Global HELP Initiative is a 501(c)3 non-profit organization;<br>
all donations are tax deductible to the fullest extent of the law.</p>
<!-- Please don't remove my credits! I worked hard to create this theme and distribute it freely. Thanks! -->
</div>

<div id="footerright">
<a href="http://wordpress.org" title="WordPress platform" ><img src="<?php bloginfo('template_directory'); ?>/images/wpfooter-trans.png" alt="WordPress" width="34" height="34" /></a>
</div>

<div class="cleared"></div>
<?php wp_footer(); ?>
</div><!-- Closes footer -->

</div><!-- Closes wrapper -->

</body>
</html>