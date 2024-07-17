SHELL := /bin/bash
MAKEFLAGS += --no-print-directory

DEV_MODE ?= on

STATIC_MFE_PORT := 42069

.PHONY: generate_static_mfe_src create_static_mfe_dir clean_static_mfe_src
.PHONY: build_all_mfe_modules clean_all_mfe_modules_builds init_all_mfe_modules_deps
.PHONY: clean_all_mfe_modules_deps clean_all_mfe_modules serve_host_app
.PHONY: clean_host_app_build init_host_app_deps clean_host_app_deps clean_host_app 
.PHONY: serve_static_mfe_src clean_all_builds clean_all_deps clean_all

.DEFAULT_GOAL = generate_static_mfe_src

define loop_all_mfe_modules
	for module_dir in ./*; do\
		if [[ $${module_dir} = "./host_app" ]]; then continue; fi;\
		if [[ -d $${module_dir} ]]; then\
			bash -c "$(1)";\
		fi;\
	done
endef

define if_dev_mode
	if [[ "$(DEV_MODE)" = "on" || "$(DEV_MODE)" = "yes" || "$(DEV_MODE)" = "true" ]]; then\
		bash -c "$(1)";\
	else\
		bash -c "$(2)";\
	fi
endef

.static: generate_static_mfe_src

generate_static_mfe_src: create_static_mfe_dir
	$(call if_dev_mode,\
		($(MAKE) build_all_mfe_modules & sleep 5),\
		$(MAKE) build_all_mfe_modules\
	) \
	&& $(call loop_all_mfe_modules,\
		echo \">> Copying $${module_dir} built content to .static...\" \
		&& mkdir -p .static/$${module_dir} \
		&& cp -a $${module_dir}/dist/assets/. .static/$${module_dir}\
	)

create_static_mfe_dir:
	mkdir -p .static

clean_static_mfe_src:
	echo ">> Erasing all content from .static..."
	rm -rf .static

build_all_mfe_modules: init_all_mfe_modules_deps
	$(call loop_all_mfe_modules,\
		if [[ ! -d $${module_dir}/dist ]]; then\
			echo \">> Building $${module_dir} content into it's dist folder...\" \
			&& cd $${module_dir} \
			&& $$($(call if_dev_mode,\
				echo \"(npm run build:watch &)\",\
				echo \"npm run build\"\
			));\
		fi\
	)

clean_all_mfe_modules_builds:
	$(call loop_all_mfe_modules,\
		echo \">> Erasing $${module_dir} built content from it's dist folder...\" \
		&& rm -rf $${module_dir}/dist\
	)

init_all_mfe_modules_deps:
	$(call loop_all_mfe_modules,\
		if [[ ! -d $${module_dir}/node_modules ]]; then\
			echo \">> Installing $${module_dir} dependencies...\" \
			&& cd $${module_dir} \
			&& npm i;\
		fi\
	)

clean_all_mfe_modules_deps:
	$(call loop_all_mfe_modules,\
		echo \">> Erasing $${module_dir} dependencies...\" \
		&& rm -rf $${module_dir}/node_modules\
	)

clean_all_mfe_modules: clean_all_mfe_modules_builds clean_all_mfe_modules_deps

serve_host_app: init_host_app_deps
	echo ">> Serving the host_app..."
	cd host_app \
	&& npm run serve:dev:mfe

clean_host_app_build:
	echo ">> Erasing host_app built content from it's dist folder..."
	rm -rf host_app/dist

init_host_app_deps:
	if [ ! -d host_app/node_modules ]; then\
		echo ">> Installing host_app dependencies..." \
		&& cd host_app \
		&& npm i;\
	fi

clean_host_app_deps:
	echo ">> Erasing host_app dependencies..."
	rm -rf host_app/node_modules

clean_host_app: clean_host_app_build clean_host_app_deps

serve_static_mfe_src: .static
	echo ">> Serving static files on .static for Module Federation on port $(STATIC_MFE_PORT)..."
	cd .static \
	&& npx -y serve -p $(STATIC_MFE_PORT) --cors

clean_all_builds: clean_all_mfe_modules_builds clean_host_app_build

clean_all_deps: clean_all_mfe_modules_deps clean_host_app_deps

clean_all: clean_static_mfe_src clean_all_mfe_modules clean_host_app

test_command:
	$(call if_dev_mode,\
		echo \">> Dev mode is ON\",\
		echo \">> Dev mode is OFF\"\
	)

$(V).SILENT:
