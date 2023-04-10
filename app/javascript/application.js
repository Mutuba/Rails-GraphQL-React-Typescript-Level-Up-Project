// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import mount from "../mount";
import Hello from "./hello_react";
mount({ Hello });
