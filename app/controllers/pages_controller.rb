class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :contacto ]
  def home
  end

  def contacto
  end
end
