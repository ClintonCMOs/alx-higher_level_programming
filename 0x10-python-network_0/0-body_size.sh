#!/bin/bash
# sends a request to a URL and displays response size
curl -so /dev/null -w '%{size_download}\n' $1
