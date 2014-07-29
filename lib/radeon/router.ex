defmodule Radeon.Router do
  use Phoenix.Router

  plug Plug.Static, at: "/static", from: :radeon
  get "/", Radeon.Controllers.Pages, :index, as: :page
end
