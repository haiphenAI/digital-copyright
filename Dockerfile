# Dockerfile for haiphen

FROM ubuntu

MAINTAINER jude safo <pi@haiphenai.com>
SHELL ["/bin/bash", "-c"]

# Download haiphen
ENTRYPOINT ["haiphen"]
CMD ["haiphen","LICENSE", "LICENSEsha256.enc" ]

