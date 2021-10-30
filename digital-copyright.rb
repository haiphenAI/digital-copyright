# Documentation: https://docs.brew.sh/Formula-Cookbook
#                https://rubydoc.brew.sh/Formula
# PLEASE REMOVE ALL GENERATED COMMENTS BEFORE SUBMITTING YOUR PULL REQUEST!
class DigitalCopyright < Formula
  desc "source tarball to stamp your code with a trackable digital copyright"
  homepage "https://github.com/JudeSafo/haiphen.wiki.git"
  url "https://github.com/JudeSafo/digital-copyright/archive/refs/tags/v.1.0.0-alpha.tar.gz"
  version "master"
  sha256 "6b9ff81976f7d14b224f38af089b26e8e51905a842157b0933503bfd89b28127"
  license "MIT"

  # depends_on "cmake" => :build

  def install
    bin.install "digital-copyright"
  end

end
