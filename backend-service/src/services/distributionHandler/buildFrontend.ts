import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import fs from "fs/promises";
import { detectProjectType, detectNodeVersion, detectBuildCommand, readJSON, detectOutputDir, detectInstallCommand } from "./detector/detectProjectType.js";

const asyncExec = promisify(exec);

export async function buildFrontend(
    frontendDir: string,
    projectId: string,
    defaulFrontendbuildCommand: string,
    envs: Object
): Promise<string | null> {

    const envFlags = Object.entries(envs)
        .map(([key, value]) => `-e ${key}=${value}`)
        .join(" ");

    const buildVersion = detectNodeVersion(frontendDir);
    const buildType = detectProjectType(frontendDir)
    const InstallCommand = detectInstallCommand(frontendDir, buildType);

     // ECS + ECR + EC2 + S3
     
    const buildConfig = {
        // repoUrl :,
        // frontendPath :,
        // envFlags : ,
        // buildVersion : ,
        // buildType : ,
        // Install Command : 
    }




    return 'BUILDING';
}




// NON _CLOUD WAY 
    
    // const hostFrontendPath = `/var/lib/docker/volumes/veren_clones-data/_data/${projectId}/frontend`;

    // const dockerCommand = `
    //     docker run --rm \
    //     --name ${containerName} \
    //     --user ${uid}:${gid} \
    //     --memory=2g \
    //     --cpus=2 \
    //     -v ${hostFrontendPath}:/app \
    //    ${envFlags} \
    //     dynamic-frontend-builder:${buildVersion}-${buildType} \
    //     sh -c "cd /app && ${InstallCommand} && ${defaulFrontendbuildCommand}"
    //     `.trim();

    // await asyncExec(dockerCommand);