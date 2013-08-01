
http://www.brownglobalhelp.com/wp-admin/theme-editor.php?file=/themes/ADreamtoHost/archive.php&theme=A+Dream+To+Host%2FADreamtoHost&dir=theme

<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<h1 id="post-<?php the_ID(); ?>"><?php the_title(); ?></h1>
			
			<?php the_content('<p class="serif">Read the rest of this entry &raquo;</p>'); ?>
        	<?php wp_link_pages('before=<p>&after=</p>&next_or_number=number&pagelink=page %'); ?>
		
	
  		
			<?php endwhile;else : ?>
		<h2><?php _e('Not Found'); ?></h2>
<p class="*">Comments are closed.</p>
		<p><?php _e('Sorry, but the page you requested cannot be found.'); ?></p>
		
		<h3><?php _e('Search'); ?></h3>
		
			<?php include (TEMPLATEPATH . '/searchform.php'); ?>

			<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>