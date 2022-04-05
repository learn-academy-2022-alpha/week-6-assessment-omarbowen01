# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPostsController is a child class from the application controller using an index method to show some content.
class BlogPostsController < ApplicationController
  def index
  # ---2)
  # Instance variable called posts that shows all the blog posts
    @posts = BlogPost.all
  end
  # ---3)
  # Method called show will find an item at the id and show the information associated with it.
  def show
    @post = BlogPost.find(params[:id])
  end
  # ---4)
  # shows a new form with the data from BlogPost.new
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # post new data for the blog post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # edit data at the specified params id
    @post = BlogPost.find(params[:id])
  end
  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # create field to edit blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #Field that allows user to redirect to blog post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # private allows the items within it to be called upon
  private
  def blog_post_params
    # ---10)
    # this is saying that the information shown on the wegpage is the title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
