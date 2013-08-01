<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
		<div class="post">
	
			<h1 class="posttitle" id="post-<?php the_ID(); ?>"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Permanent link to'); ?> <?php the_title(); ?>"><?php the_title(); ?></a></h1>
			
			<div class="postentry" >
				<?php the_content('<p class="serif">Read the rest of this entry &raquo;</p>'); ?>
                <?php wp_link_pages('before=<p>&after=</p>&next_or_number=number&pagelink=page %'); ?>

			</div>

			<p class="postmeta">
<?php the_tags( __('Tags: ', 'blank'), ", ", " <br />" ) ?>
                  	
					<?php _e('Category: ', 'blank'); ?><?php the_category(', ') ?> <br />
                                               
						<?php if (('open' == $post-> comment_status) && ('open' == $post->ping_status)) {
							// Both Comments and Pings are open ?>
							<?php _e('You can', 'blank'); ?> <a href="#respond"><?php _e('leave a comment', 'blank'); ?></a> <?php _e('or', 'blank'); ?> <a href="<?php trackback_url(); ?>" rel="trackback"><?php _e('trackback', 'blank'); ?></a> <?php _e('from your own site', 'blank'); ?>.

						<?php } elseif (!('open' == $post-> comment_status) && ('open' == $post->ping_status)) {
				// Only Pings are Open ?>
							<?php _e('Comments are currently closed, but you can', 'blank'); ?> <a href="<?php trackback_url(); ?> " rel="trackback"><?php _e('trackback', 'blank'); ?></a> <?php _e('from your own site', 'blank'); ?>.

						<?php } elseif (('open' == $post-> comment_status) && !('open' == $post->ping_status)) {
							// Comments are open, Pings are not ?>                            
							<?php _e('You can skip to the end to leave a comment. Trackbacks are currently not allowed.', 'blank'); ?>
                            
						<?php } elseif (!('open' == $post-> comment_status) && !('open' == $post->ping_status)) {
							// Neither Comments, nor Pings are open ?>
							<?php _e('Both comments and trackbacks are currently closed.', 'blank'); ?>
                            
                            <?php } edit_post_link( __('Edit'), ' | ', ''); ?>
			</p>
			
		</div>
		
		<?php comments_template(); ?>
				
	<?php endwhile; else : ?>

		<h2><?php _e('Not Found'); ?></h2>

		<p><?php _e('Sorry, but the page you requested cannot be found.'); ?></p>
		
		<h3><?php _e('Search'); ?></h3>
		
		<?php include (TEMPLATEPATH . '/searchform.php'); ?>

	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>