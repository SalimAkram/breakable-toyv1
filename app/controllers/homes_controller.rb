class HomesController < ApplicationController
  before_action :authenticate_user, except: [:index]
  before_action :authorize_user, except: [:index, :authenticated]

  def index
  end

  def authenticated
  end

   def authorized  
  end
end
