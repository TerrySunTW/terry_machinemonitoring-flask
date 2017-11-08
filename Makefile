.PHONY: all
all: dist

.PHONY: clean
clean:
	rm -rf \
		dist \
		*.egg-info

.PHONY: dist
dist:
	python3 setup.py sdist

.PHONY: deploy
deploy: dist deploy-variables
	$(eval ARCHIVE=$(shell ls dist/))
	curl -u ${DEPLOY_USERNAME}:${DEPLOY_PASSWORD} -T dist/${ARCHIVE} "${DEPLOY_BASEURL}/${ARCHIVE}"

.PHONY: deploy-variables
deploy-variables:
ifndef DEPLOY_USERNAME
	$(error DEPLOY_USERNAME not defined)
endif

ifndef DEPLOY_PASSWORD
	$(error DEPLOY_PASSWORD not defined)
endif

ifndef DEPLOY_BASEURL
	$(error DEPLOY_BASEURL not defined)
endif
