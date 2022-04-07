# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPostsController is a child class from the application controller using an index method to show some content. Class is a blueprint for creating objects.
class BlogPostsController < ApplicationController
  def index
  # ---2)
  # Instance variable called posts is an instance varible that shows all the blog posts upon page render.
    @posts = BlogPost.all
  end
  # ---3)
  # Method called show will find an item at the id and show the information associated with it.
  def show
    @post = BlogPost.find(params[:id])
  end
  # ---4)
  #Method named new is defined with an instance variable called @post. The responsibility of new is to display a text form for users to input data.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    #@post is an instance variable called on the Database and using the create method to make a new instance in the database using the private method blog_post_params.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # finds an instance in the databse using an id and stores it in the instance variable post.
    @post = BlogPost.find(params[:id])
  end
  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Updates Active Record Method on the BlogPost database at a single instance and updates with the params in the private method blog_post_params.
    #will help with cat tinder project
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
  # private keyword make this method only accessible to the class it was defined in
  private
  def blog_post_params
    # ---10)
    # this is saying that the information shown on the wegpage is the title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
