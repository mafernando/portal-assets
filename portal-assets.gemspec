# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'portal-assets/version'

Gem::Specification.new do |spec|
  spec.name          = 'portal-assets'
  spec.version       = PortalAssets::VERSION
  spec.authors       = ['mfernando@malwarebytes.com']
  spec.description   = 'Front end assets for DSE Portal'
  spec.summary       = 'Front end assets for DSE Portal'
  spec.homepage      = 'https://github.com/mafernando/portal-assets'
  spec.license       = 'APACHE'

  spec.files         = `find ./* -type f | cut -b 3-`.split($/)
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundler', '~> 1.3'
  spec.add_development_dependency 'rake'
end
