<?php get_header(); ?>

	<?php if (have_posts()) : ?>
	
	  <?php /* If this is a category */ if (is_category()) { ?>
		<?php _e('Category', 'blank'); ?> &#8220;<?php single_cat_title(); ?>&#8221;
 	
      <?php /* If this is a tag */ } elseif( is_tag() ) { ?>
		<?php _e('Posts tagged with', 'blank'); ?> &#8220;<?php single_tag_title(); ?>&#8221;
 	  
	  <?php /* If this is a daily archive */ } elseif (is_day()) { ?>
		<?php _e('Archive for', 'blank'); ?> <?php the_time('F jS, Y'); ?>
 	 
      <?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
		<?php _e('Archive for', 'blank'); ?> <?php the_time('F, Y'); ?>
 	 
      <?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
		  <?php _e('Archive for', 'blank'); ?> <?php the_time('Y'); ?>
	
      <?php /* If this is an author archive */ } elseif (is_author()) { ?>
		 <?php _e('Author Archive ', 'blank'); ?>
    
      <?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
		 <?php _e('Blog archives ', 'blank'); ?>
 	  <?php } ?>
		
		<?php while (have_posts()) : the_post(); ?>
		
			<div class="post">
	
				<h2 class="posttitle" id="post-<?php the_ID(); ?>"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php _e('Permanent link to'); ?> <?php the_title(); ?>"><?php the_title(); ?></a></h2>
			
				<div class="postentry">
				
				<?php the_content("&raquo; Continue reading " . the_title('"','"',false), 0); ?>
				</div>
			
				<p class="postfeedback">
				<?php comments_popup_link(__('Leave a Comment'), __('Comments (1)'), __('Comments (%)'), 'commentslink', __('Comments off')); ?>
				</p>
				
				<p class="postmeta"> 
				<?php the_time('F j, Y') ?> 
				&#183;     	<?php the_tags( __('Tags: ', 'blank'), ", ", " ") ?>
        		&#183;     	<?php _e('Category: ', 'blank'); ?><?php the_category(', ') ?>
        		    	<?php edit_post_link( __('Edit'), ' | ', ''); ?>
				</p>
				
				<!--
				<?php trackback_rdf(); ?>
				-->
			
			</div>
				
		<?php endwhile; ?>
		<div class="footnav">
			<div class="alignleft"><?php next_posts_link('&laquo; Older Posts') ?></div>
			<div class="alignright"><?php previous_posts_link('Newer Posts &raquo;') ?></div>
		</div>	
		<?php else : ?>

		<h2><?php _e('Not Found'); ?></h2>

		<p><?php _e('Sorry, but the page you requested cannot be found.'); ?></p>
		
		<h3><?php _e('Search'); ?></h3>
		
		<?php include (TEMPLATEPATH . '/searchform.php'); ?>

	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
