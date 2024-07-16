SHELL := /bin/bash

.PHONY: copy_all_to_static_dir create_static_dir

copy_all_to_static_dir: create_static_dir
	for module_dir in ./*; do\
		if [[ $${module_dir} = "./host_app" ]]; then continue; fi;\
		if [ -d $${module_dir} ]; then\
			echo $${module_dir} \
			&& mkdir -p .static/$${module_dir} \
			&& cp -a $${module_dir}/dist/assets/. .static/$${module_dir};\
		fi;\
	done

create_static_dir:
	mkdir -p .static

clean_static_dir:
	rm -rf .static
